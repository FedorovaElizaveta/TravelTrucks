interface TVIconProps {
  size?: number;
  className?: string;
}

const TVIcon: React.FC<TVIconProps> = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} className={className}>
    <use href="/symbol-defs.svg#icon-tv"></use>
  </svg>
);

export default TVIcon;
