import { Button, styled } from "@mui/material";
import { Link, LinkProps } from "react-router-dom";

import React from "react";

type PredefinedLinkButtonProps = Omit<React.ComponentProps<typeof Button>, "LinkComponent">;

const PredefinedLinkButton = (props: PredefinedLinkButtonProps) => <Button LinkComponent={Link} {...props}></Button>

type LinkButtonProps = LinkProps & PredefinedLinkButtonProps;

const LinkButton = styled(PredefinedLinkButton)<LinkButtonProps>(({ theme }) => ({}));

export default LinkButton;