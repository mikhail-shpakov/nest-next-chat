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
        .nbe {
          border-radius: var(--border-radius-primary);
          background: var(--color-accent-opacity);
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);

          :global(img) {
            transition: var(--transition);
          }

          :global(.nbe__open) {
            transform: rotate(0.5turn);
          }

          @media (min-width: 769px) {
            // todo
            display: none;
          }
        }
      `}</style>
    </button>
  )
}
