import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Form, { Field, useForm } from "rc-field-form";
import { registerOrganization } from "../../services";

const Organization = () => {
  const [form] = useForm();
  return (
    <Box>
      <Typography typography="h5" sx={{ mt: 2, mb: 2 }}>
        Organization Register
      </Typography>
      <Form
        form={form}
        onFinish={(values) => {
          registerOrganization(values.name);
          console.log(values);
        }}
      >
        <Field name="name">
          <TextField
            id="name"
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
