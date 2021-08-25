export default function ChatInfo () {
  return (
    <div className="ci">
      <p className="font-body-1 font-medium ci__title">Привет, друг</p>
      <p className="font-body-2 ci__subtitle">Это демонстрационный проект, поэтому в нём есть только один общий чат для
        всех авторизованных пользователей</p>

      <style jsx>{`
        @import "../styles";

        .ci {
          background: rgba($color-accent, 0.05);
          padding: 24px;

          &__title {
            color: $color-accent;
          }

          &__subtitle {
            color: $color-alt;
            margin-top: 8px;
          }
        }
      `}</style>
    </div>
  )
}
