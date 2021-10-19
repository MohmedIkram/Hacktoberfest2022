import './Button.css';
export default function Button({ id, change }) {
  
  return (
    <div className="button-container">
      <button className={`${id}-btn`} onClick={() => change("overview")}>
        OVERVIEW
      </button>
      <button className={`${id}-btn`} onClick={() => change("structure")}>
     STRUCTURE
      </button>
      <button className={`${id}-btn`} onClick={() => change("geology")}>
         GEOLOGY
      </button>
    </div>
  );
}
