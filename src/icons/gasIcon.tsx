interface gasIconProps {
  size?: number;
  className?: string;
}

const gasIcon: React.FC<gasIconProps> = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} className={className}>
    <use href="/symbol-defs.svg#icon-gas"></use>
  </svg>
);

export default gasIcon;
