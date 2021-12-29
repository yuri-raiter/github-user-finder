import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { getUserProfileData, getUserRepositories } from "../../utils/userData";
import { IUser } from '../../types'
import styles from './user.module.scss'
import { useRouter } from "next/router";


const User: NextPage<IUser> = ({ profile, repositories }: IUser) => {
  const router = useRouter()

  function handleButtonClick() {
    router.push('/')
  }

  return (
    <>
      <button className={styles['back-button']} onClick={handleButtonClick}>
        <Image
          src={'/back.svg'}
          height={30}
          width={30}
          alt='Profile Picture'
        />
      </button>
      <div className={styles.container}>
        <div className={styles.profile}>
          <Image
            src={profile.avatar_url}
            height={200}
            width={200}
            alt='Profile Picture'
          />
          <div className={styles.info}>
            <h1>{profile.name}</h1>
            <div className={styles['info-numbers']}>
              <div className={styles.followers}>
                <Image
                  src='/followers.svg'
                  height={20}
                  width={20}
                  alt='Followers'
                />
                {profile.followers == 1 ?
                  (<p>{profile.followers} Follower</p>)
                  :
                  (<p>{profile.followers} Followers</p>)
                }
              </div>
              <div className={styles.following}>
                <Image
                  src='/following.svg'
                  height={20}
                  width={20}
                  alt='Following'
                />
                <p>{profile.following} Following</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bio}>
          <p>{profile.bio}</p>
        </div>
        <div className={styles.repositories}>
          <h3>Repositories</h3>
          <ul>
            {repositories.map(r => (
              <li key={r.id}>
                <a href={r.html_url} target='_blank'>
                  <p>{r.name}</p>
                  <Image
                    src='/arrow.svg'
                    height={15}
                    width={15}
                    alt='Arrow'
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default User


export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context
  const user = Array.isArray(params!.user) ? params!.user[0] : params!.user

  const profile = await getUserProfileData(user!)

  if (!profile) {
    return {
      notFound: true
    }
  }

  const repositories = await getUserRepositories(user!)

  return {
    props: {
      profile,
      repositories
    }
  }
}