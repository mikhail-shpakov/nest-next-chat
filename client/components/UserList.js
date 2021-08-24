import UserCount from './UserCount'
import ContextUserList from '/contexts/ContextUserList'
import { useContext, useEffect, useState } from 'react'
import UserBox from './UserBox'

export default function UserList () {
  const userList = useContext(ContextUserList)

  const [userListFiltered, setUserListFiltered] = useState([])
  const [isOnlyOnlineUser, setIsOnlyOnlineUser] = useState(false)

  useEffect(() => {
    const users = isOnlyOnlineUser
      ? userList.filter(e => e.isOnline)
      : userList

    setUserListFiltered(users)
  }, [userList, isOnlyOnlineUser])

  const classesSelected = 'font-medium ul__filter-selected'
  const classesBtn = (set) => `font-body-2 ul__filter-btn ${set ? classesSelected : null}`

  return (
    <div className="ul">
      <div className="ul__list-wrapper">
        <p className="font-body-1 font-medium ul__title">Список пользователей</p>
        <div className="ul__filter ul__filter-online">
          <button onClick={() => setIsOnlyOnlineUser(false)} className={classesBtn(!isOnlyOnlineUser)}>Все</button>
          <button onClick={() => setIsOnlyOnlineUser(true)} className={classesBtn(isOnlyOnlineUser)}>Онлайн</button>
        </div>

        <div className="ul__box-wrapper">
          {userListFiltered.map(user =>
            <UserBox key={user.id} user={user}/>
          )}
        </div>
      </div>

      <UserCount userCount={userListFiltered.length}/>

      <style jsx>{`
        .ul {
          padding: 32px 0 32px 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;

          &__title {
            margin-bottom: 32px;
          }

          &__filter {
            display: flex;
            grid-gap: 12px;
            color: var(--color-alt);

            &-btn {
              cursor: pointer;
            }

            &-selected {
              color: var(--color-accent);
            }
          }

          &__box-wrapper {
            height: 70vh;
            padding-bottom: 32px;
            overflow-y: auto;
          }

          @media (max-width: 768px) {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
