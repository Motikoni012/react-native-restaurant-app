import React, { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../services/firebase";

interface AuthType {
  user: any
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, profile: any) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthType | null>(null)

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email
        })

        try {
          const snap = await getDoc(doc(db, "users", firebaseUser.uid))

          if (snap.exists()) {
            setUser({
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              ...snap.data()
            })
          }
        } catch (err) {
          console.log("Firestore profile fetch failed")
        }
      } else {
        setUser(null)
      }

      setLoading(false)
    })

    return unsubscribe
  }, [])

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password)
  }

  const register = async (email: string, password: string, profile: any) => {
    const res = await createUserWithEmailAndPassword(auth, email, password)

    await setDoc(doc(db, "users", res.user.uid), {
      ...profile,
      email,
      role: "user",
      createdAt: new Date()
    })
  }

  const logout = async () => {
    await signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be inside AuthProvider")
  return context
}