export default function ContentWrapper ({ children }) {
  return (
    <div className="cw">
      {children}

      <style jsx>{`
        @import "../styles";

        .cw {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 14px 20px;
          max-width: $box-content;
          margin: auto;
          color: $color-main;
          border-radius: $border-radius-primary;
          background: $color-box;
          transition: $transition;

          &:hover {
            background: $color-line;
          }
        }
      `}</style>
    </div>
  )
}
