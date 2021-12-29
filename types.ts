import { ReactNode } from "react";


export interface IGetUserProfileData {
  avatar_url: string
  followers: number
  following: number
  name: string
  bio: string
}

export interface IGetUserRepositories {
  name: string
  html_url: string
  id: number
}

export interface IUser {
  profile: IGetUserProfileData
  repositories: IGetUserRepositories[]
}