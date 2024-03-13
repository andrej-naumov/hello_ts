import './styles.css';
function SubmitButton ({value, onClick}) {
    return <div className="submit"><input type="submit" className="submitbtn" value={value} onClick={onClick}/></div>
}

export default SubmitButton;