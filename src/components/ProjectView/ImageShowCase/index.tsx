import * as s from "./styles";
import { ExpandedImageView, ExpandedImageViewObject } from "@/components";
import { MouseEvent, useEffect, useRef, useState } from "react";

export const ImageShowCase = ({images}: {images: string[]}) => {
	const [imagesExpand, setImageExpand] = useState<ExpandedImageViewObject[]>([]);
	const [showImageView, setShowImageView] = useState<boolean>(false);
	const [mouseDown, setMouseDown] = useState<boolean>(false);
	const [mouseDownPoint, setMouseDownPoint] = useState<{x: number, scrollX: number} | null>(null);
	const [mouseMoving, setMouseMoving] = useState<boolean>(false);

	const rootRef = useRef<HTMLDivElement | null>(null);

	const clickImage = (srcList: string[], srcSelected: string) => {
		const list: ExpandedImageViewObject[] = srcList.map((a, i) => {
			return {
				label: `Project Captures ${i + 1}/${srcList.length}`,
				src: a,
				selected: srcSelected == a
			} as ExpandedImageViewObject
		});

		setImageExpand(list);
		setShowImageView(true);
	}

	const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
		setMouseDown(true);

		setMouseDownPoint({
			x: e.screenX, 
			scrollX:	e.currentTarget.scrollLeft
		});
	}

	const handleMouseUp = () => {
		setMouseDown(false);

		setMouseDownPoint(null);
		setMouseMoving(false);
	}

	const handleMouseMove = (e: any) => {
		if (!mouseDown || !mouseDownPoint || !rootRef.current) return;
		
		const root = rootRef.current;

		root.scrollTo(mouseDownPoint.scrollX + (mouseDownPoint.x - e.screenX), 0);

		setMouseMoving(true);
	}

	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("mouseup", handleMouseUp);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("mouseup", handleMouseUp);
		}
	}, [rootRef, mouseDown, mouseDownPoint]); 

	return ( 
		<s.Root ref={rootRef} onMouseDown={handleMouseDown} $moving={mouseMoving}>
			{images.map((ig, iig) => (
				<s.Wrapper $moving={mouseMoving} key={iig}>
					<s.Img src={ig} onClick={() => clickImage(images, ig)} />

					<s.HoverText>
						Expand
					</s.HoverText>
				</s.Wrapper>
			))}

			<ExpandedImageView images={imagesExpand} show={showImageView} hide={() => setShowImageView(false)} />
		</s.Root>
	)
}