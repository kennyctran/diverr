import React, { useState } from "react";
import { Chip, Box, Grid } from "@material-ui/core";
import splitArrayRows from "common/utils/splitArray.js";
import SmallTagContainer from "common/widgets/SmallTagContainer.js";

export default function Tags({ log }) {
  return log.tags && <SmallTagContainer tags={log.tags} />;
}
