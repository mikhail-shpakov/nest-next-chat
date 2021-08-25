import Image from 'next/image'

export default function NavbarButtonExpand (props) {
  return (
    <button className="nbe" onClick={props.onClick}>
      <Image className={props.isOpenMobileInfo ? 'nbe__open' : null}
             src="/images/chevron.svg"
             alt="chevron"
             width={24}
             height={24}/>

      <style jsx>{`
        @import "../styles";

        .nbe {
          border-radius: $border-radius-primary;
          background: rgba($color-accent, 0.05);
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: $transition;

          :global(img) {
            transition: $transition;
          }

          :global(.nbe__open) {
            transform: rotate(0.5turn);
          }

          @media (min-width: $tablet) {
            display: none;
          }
        }
      `}</style>
    </button>
  )
}
