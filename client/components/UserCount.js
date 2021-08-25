export default function UserCount (props) {
  return (
    <div className="uc">
      Всего пользователей: {props.userCount}

      <style jsx>{`
        @import "../styles";

        .uc {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 32px 0 32px 24px;
          background: $color-background;
          color: $color-alt;
        }
      `}</style>
    </div>
  )
}
