import axios from "axios"
import { IGetUserProfileData, IGetUserRepositories } from "../types"

export async function getUserProfileData(value: string) {
  let data = {} as IGetUserProfileData

  try {
    const response = await axios.get(`https://api.github.com/users/${value}`)
    const { avatar_url, name, followers, following, bio } = response.data
    data = { avatar_url, name, followers, following, bio }
  }
  catch {
    return null
  }

  return data
}

export async function getUserRepositories(value: string) {
  let data: IGetUserRepositories[] = []

  try {
    const response = await axios.get(`https://api.github.com/users/${value}/repos`)
    response.data.map((r: any) => {
      let o = {
        name: r.name,
        html_url: r.html_url,
        id: r.id
      }

      data.push(o)
    })
  }
  catch (err) {
    console.error(err)
  }

  return data
}