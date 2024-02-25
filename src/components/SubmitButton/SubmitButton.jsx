import './styles.css';
function SubmitButton ({value}) {
    return <div className="submit"><input type="submit" className="submitbtn" value={value} /></div>
}

export default SubmitButton;