import ContentWrapper from './ContentWrapper'

export default function AuthorLink () {
  return (
    <a className="al" href="https://shpakov.dev" target="_blank" rel="noopener noreferrer">
      <ContentWrapper>
        <div className="al__text">
          <p className="font-body-1 font-medium">Связаться с автором</p>
          <p className="font-body-2 al__text-subtitle">Или посмотреть другие проекты</p>
        </div>
      </ContentWrapper>

      <style jsx>{`
        @import "../styles";

        .al {
          text-decoration: none;
          display: block;
          margin-top: 12px;

          > :global(.cw) {
            background: rgba($color-accent, 0.05);

            &:hover {
              background: rgba($color-accent, 0.1);
            }
          }

          &__text {
            p {
              color: $color-accent;
            }

            &-subtitle {
              color: $color-alt !important;
            }
          }
        }
      `}</style>
    </a>
  )
}
