export interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ className = 'z-50', onClick }) => {
  return (
    <div
      className={`${className} fixed inset-0 w-full h-full bg-graphite opacity-[0.7] px-20`}
      onClick={onClick}
    />
  );
};

export default Overlay;
