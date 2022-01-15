const FormGroup = ({ label, type='text', value="", onChangeFunc}) => (
    <div className="form-group">
        <label>{label}</label>
        <input type={type} placeholder={label} value={value} onChange={e => onChangeFunc(e.target.value)} className="form-control"/>
    </div>
)

export default FormGroup;