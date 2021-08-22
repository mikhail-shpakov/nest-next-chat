export default function ChatInfo () {
  return (
    <div className="ci">
      <p className="font-body-1 font-medium ci__title">Привет, друг</p>
      <p className="font-body-2 ci__subtitle">Это демонстрационный проект, поэтому в нём есть только один общий чат для
        всех авторизованных пользователей</p>

      <style jsx>{`
        .ci {
          background: var(--color-accent-opacity);
          padding: 24px;
          
          &__title {
            color: var(--color-accent);
          }
          
          &__subtitle {
            color: var(--color-alt);
            margin-top: 8px;
          }
        }
      `}</style>
    </div>
  )
}
