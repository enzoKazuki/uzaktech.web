"use client";

import * as bx from "@/styles/primitive/box";
import * as tx from "@/styles/primitive/text";
import * as wp from "@/styles/primitive/wrapper";
import { ButtonLink, Input, Textarea } from "@/components";
import { Button } from "@/styles/primitive/button";
import { SubmitEvent, useState } from "react";
import { emailRegexp, emailTestRegexp, nameRegexp } from "@/utils";
import { FormProvider } from "@/context";
import { api, ContactMessageEndpoint } from "@/services";

export const ContactMessageForm = () => {
	const [submitFallback, setSubmitFallback] = useState<boolean | null>(null);
	const [messageStatus, setMessageStatus] = useState<"to_send" | "sent" | "error">("to_send");

	const submitMessage = async (e: SubmitEvent) => {
		e.preventDefault();

		setSubmitFallback(true);

		const form = e.currentTarget as HTMLFormElement;

		const body = {
			email: form.email.value,
			message: form.message.value,
			subject: form.subject.value,
			firstName: form.first_name.value,
			lastName: form.last_name.value
		}

		const response = await api.post(ContactMessageEndpoint.root, body);

		setSubmitFallback(null);
		
		if (response.status == 201) {
			setMessageStatus("sent"); 
		}
		else {
			setMessageStatus("error");
		}
	}
	
	return (
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

				{messageStatus != "to_send" && 
					<>
						<wp.Division $orientation={1} $margin="13px 0" />
						<wp.Col $pad="0 9px" $gap="3px">
							{messageStatus == "sent" && 
								<>
									<tx.P $weight="600" $colorPreset="text" $size="xv" $opc={0.3}>
										SENT!
									</tx.P>
									<tx.P $weight="400" $opc={0.79}>
										Your message was sent successfuly, I appreciate your attention on getting in contact. 
										<tx.Span $weight="500"> I'll return to you as soon as possible.</tx.Span>
									</tx.P>
								</>
							}
							{messageStatus == "error" && 
								<tx.P $colorPreset="redError">
									:( sorry look like we have a problem here, please try again later.
								</tx.P>
							}
						</wp.Col>
						<wp.Division $orientation={1} $margin="13px 0" />
					</>
				}

				<wp.Row $fWrap="wrap" $gap="9px" $jc={messageStatus != "to_send" ? "space-between" : "flex-end"}>
					{messageStatus != "to_send" && 
						<ButtonLink clientRender type="button" href="/" btnProps={{$style: "ghost_link"}}>
							Back home
						</ButtonLink>
					}

					<Button $fullMaxWidth="79px" type="submit" {...(submitFallback != null ? {disabled: submitFallback} : {})}>
						Send
					</Button>
				</wp.Row>
			</FormProvider>
		</bx.Box>
	)
}