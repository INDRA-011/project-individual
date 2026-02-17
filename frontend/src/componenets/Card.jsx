const Card = ({ title, children, footer, className = "" }) => {
  return (
    <div
      className={`bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md ${className}`}
    >
      {title && (
        <div className="px-6 py-4 border-b border-gray-50">
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        </div>
      )}

      <div className="p-6">
        {children || (
          <h1 className="text-gray-400 italic">Card Content Placeholder</h1>
        )}
      </div>

      {footer && (
        <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-50 rounded-b-2xl">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
