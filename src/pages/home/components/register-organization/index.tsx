import {
  Button,
  FormControl,
  Input,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Form, { Field, useForm } from "rc-field-form";

const Organization = () => {
  const [form] = useForm();
  return (
    <Box>
      <Typography typography="h5" sx={{ mt: 2, mb: 2 }}>
        Organization Register
      </Typography>
      <Form form={form} onFinish={(values) => console.log(values)}>
        <Field name="organization_name">
          <TextField
            id="organization_name"
            placeholder="Enter organization name..."
            sx={{ mt: 5, mb: 5 }}
            fullWidth
            variant="outlined"
            label="Organization name"
          />
        </Field>
        <Button type="submit" variant="contained">
          Register Organization
        </Button>
      </Form>
    </Box>
  );
};

export default Organization;
