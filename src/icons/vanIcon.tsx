interface vanIconProps {
  size?: number;
  className?: string;
}

const vanIcon: React.FC<vanIconProps> = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} className={className}>
    <use href="/symbol-defs.svg#icon-van"></use>;
  </svg>
);

export default vanIcon;
