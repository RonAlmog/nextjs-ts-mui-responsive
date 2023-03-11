import Layout from "@/components/layout/Layout";
import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Typography,
  FormHelperText,
  Checkbox,
  FormGroup,
} from "@mui/material";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";

import EditIcon from "@mui/icons-material/Edit";
import { Bookmark, BookmarkBorder } from "@mui/icons-material";

type Props = {};

const CheckboxPage = (props: Props) => {
  const [accept, setAccept] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);

  console.log("skills", skills);
  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(e.target.value);
    if (index === -1) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill != e.target.value));
    }
    setAccept(e.target.checked);
  };
  return (
    <Layout>
      <Box>
        <Box>
          <FormControlLabel
            label="I accept terms and conditions"
            control={
              <Checkbox
                checked={accept}
                onChange={(e) => setAccept(e.target.checked)}
              />
            }
          />
          {accept ? "Yes" : "No"}
        </Box>
        <Box>
          <FormControlLabel
            label="I accept terms and conditions"
            control={
              <Checkbox
                icon={<BookmarkBorder />}
                checkedIcon={<Bookmark />}
                checked={accept}
                onChange={(e) => setAccept(e.target.checked)}
              />
            }
          />
        </Box>
        <Box>
          <FormControl>
            <FormLabel>Skills</FormLabel>
            <FormGroup>
              <FormControlLabel
                label="HTML"
                value="html"
                control={
                  <Checkbox
                    checked={skills.includes("html")}
                    onChange={handleSkillChange}
                  />
                }
              />
              <FormControlLabel
                label="Javascript"
                value="javascript"
                control={
                  <Checkbox
                    checked={skills.includes("javascript")}
                    onChange={handleSkillChange}
                  />
                }
              />
              <FormControlLabel
                label="Python"
                value="python"
                control={
                  <Checkbox
                    checked={skills.includes("python")}
                    onChange={handleSkillChange}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </Box>
      </Box>
    </Layout>
  );
};

export default CheckboxPage;
