export default function ContentWrapper ({ children }) {
  return (
    <div className="cw">
      {children}

      <style jsx>{`
        .cw {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 14px 20px;
          max-width: var(--box-content);
          margin: auto;
          color: var(--color-main);
          border-radius: var(--border-radius-primary);
          background: var(--color-box);
          transition: var(--transition);

          &:hover {
            background: var(--color-line);
          }
        }
      `}</style>
    </div>
  )
}
