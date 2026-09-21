"use server"

import bcrypt from "bcryptjs"
import { db } from "../db"
import { users } from "../db/schema"
import { redirect } from "next/navigation"
import { eq } from "drizzle-orm"

export type RegisterState = {
    error?: string
}

export const registerUser = async (_previousState: RegisterState, formData: FormData): Promise<RegisterState> => {
    const username = (formData.get("username") as string)?.trim()
    const name = (formData.get("name") as string)?.trim()
    const password = formData.get("password") as string
    const confirmPassword = formData.get("confirmPassword") as string

    if (username.length < 4 || password.length < 4) {
        return { error: "Username and password must be more than 4 characters long." }
    }

    if (password !== confirmPassword) {
        return { error: "The passwords do not match, make sure they match." }
    }

    //check if the user already exists with the username
    const matchingUser = await db.query.users.findFirst({ where: eq(users.username, username) });
    if (matchingUser) {
        return { error: "The user with this username already exists." }
    }

    const passwordHash = await bcrypt.hash(password, 10);

    await db.insert(users).values({ username, name, passwordHash })

    redirect('/login')
}