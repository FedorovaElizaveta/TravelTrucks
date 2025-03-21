interface fullyIntegratedIconProps {
  size?: number;
  className?: string;
}

const fullyIntegratedIcon: React.FC<fullyIntegratedIconProps> = ({
  size = 32,
  className = "",
}) => (
  <svg width={size} height={size} className={className}>
    <use href="/symbol-defs.svg#icon-fullyIntegrated"></use>;
  </svg>
);

export default fullyIntegratedIcon;
