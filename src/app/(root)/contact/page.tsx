"use client";

import * as s from "./styles";
import * as bx from "@/styles/primitive/box";
import * as tx from "@/styles/primitive/text";
import * as sc from "@/styles/primitive/section";
import * as wp from "@/styles/primitive/wrapper";
import { AvailabilityLable, Input, Link, Textarea } from "@/components";
import { Button } from "@/styles/primitive/button";
import { SubmitEvent } from "react";
import { emailRegexp, emailTestRegexp, nameRegexp } from "@/utils";
import { FormProvider } from "@/context";

export default function Page() {
	const submitMessage = async (e: SubmitEvent) => {
		e.preventDefault();

		console.log("Message Submited");
	}

	return (
		<sc.Root>
			<sc.Section $fDirection="row" $breakAt={9}>
				<sc.Content $gap="18px">
					<wp.Col $gap="7px">
						<tx.H1>Get in contact</tx.H1>

						<AvailabilityLable />
					</wp.Col>

					<sc.Copy>
						I hope you find what you were looking for when you joined here.
						<br />
						It would be great to hear from you!
					</sc.Copy>

					<bx.Box $padding="9px 13px" $gap="9px" $maxWidth="min(fit-content, 100%)" $width="fit-content">
						<tx.P $size="xviii" $weight="450">My links</tx.P>

						<wp.Col $gap="3px">
							<wp.Col>
								<wp.Row $pad="3px 9px" $gap="9px" $ai="center">
									<s.Icon src={"/social_icons/email.svg"} alt="email icon" />

									<tx.Span $lSpacing=".03rem" $size="xvi" $weight="500" $tDecoration="none">enzo.kazuki9@gmail.com</tx.Span>
								</wp.Row>
							</wp.Col>

							<Link poserStyle target="_blank" href="https://www.github.com/enzoKazuki">
								<wp.Row $pad="3px 9px" $gap="9px" $ai="center">
									<s.Icon src={"/social_icons/github.svg"} alt="github icon" />

									<tx.Span $lSpacing=".03rem" $size="xvi" $weight="500" $tDecoration="none">/ enzoKazuki</tx.Span>
								</wp.Row>
							</Link>

							<Link poserStyle target="_blank" href="https://www.linkedin.com/in/enzoKazuki">
								<wp.Row $pad="3px 9px" $gap="9px" $ai="center">
									<s.Icon src={"/social_icons/linkedin.svg"} alt="linkedin icon" />

									<tx.Span $lSpacing=".03rem" $size="xvi" $weight="500">/ enzoKazuki</tx.Span>
								</wp.Row>
							</Link>
						</wp.Col>
					</bx.Box>
				</sc.Content>
				<bx.Box $width="100%" $padding="13px 15px" $gap="9px">
					<FormProvider onSubmit={submitMessage}>
						<tx.P $size="xviii" $weight="450">Leave a message</tx.P>

						<wp.Col $pad="12px 9px" $gap="13px">
							<wp.Row $gap="13px" $dSize={["100%"]} $breakAt={4}>
								<Input label="First Name" name="first_name" regex={nameRegexp} scaleToRoot $width="100%" placeholder="e.g. John" />

								<Input label="Last Name" name="last_name" regex={nameRegexp} scaleToRoot $width="100%" placeholder="e.g. Doe" />
							</wp.Row>

							<Input 
								label="Email" 
								name="email" 
								placeholder="e.g. john.doe@example.com" 
								required 
								regex={emailRegexp}
								regexTest={[{regex: emailTestRegexp, error: "This email isn't valid."}]} 
								scaleToRoot $width="100%" 
							/>

							<Input label="Subject" name="subject" scaleToRoot $width="100%" placeholder="e.g. I'd like to chat" />

							<Textarea 
								label="Message" 
								name="message" 
								placeholder="your message..." 
								required
								scaleToRoot $width="100%" $maxHeight="9lh" $resize="vertical" 
							/>
						</wp.Col>

						<wp.Row $jc="flex-end">
							<Button $fullMaxWidth="90px">
								Send
							</Button>
						</wp.Row>
					</FormProvider>
				</bx.Box>
			</sc.Section>
		</sc.Root>
	)
}