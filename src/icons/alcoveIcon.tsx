interface alcoveIconProps {
  size?: number;
  className?: string;
}

const alcoveIcon: React.FC<alcoveIconProps> = ({
  size = 32,
  className = "",
}) => (
  <svg width={size} height={size} className={className}>
    <use href="/symbol-defs.svg#icon-alcove"></use>
  </svg>
);

export default alcoveIcon;
