import { v } from "convex/values";
import { action } from "./_generated/server";
import { Email } from "./email";
import React from "react";

import { Resend } from "resend";

const resend = new Resend("re_cLixEGF9_E1ABMLL47GKCG2faVfbk2EU9");

// You can fetch data from and send data to third-party APIs via an action:
export const sendEmail = action({
  // Validators for arguments.
  args: {
    first: v.number(),
    second: v.string(),
  },

  handler: async () => {
    await resend.sendEmail({
      from: "onboarding@resend.dev",
      to: "thomasballinger@gmail.com",
      subject: "Hello World",
      react: <Email url="https://www.example.com" />,
    });
  },
});
