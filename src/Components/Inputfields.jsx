import { TextField } from "@mui/material";

const InputField = ({label,type,value,onChange,error,helperText,required}) => {
    return (
        <TextField
            label={label}
            type={type}
            value={value}
            onChange={onChange}
            fullWidth
            required={required}
            error={!!error}
            helperText={error || helperText}
            variant="outlined"
            sx={{ mt: 2 }}
        />
    )
}
export default InputField;