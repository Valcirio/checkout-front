import { type BaseSyntheticEvent } from 'react'

export default async function CaptureImageFile(
	element: BaseSyntheticEvent
): Promise<string | null> {
	const reader = new FileReader()
	return new Promise((resolve, reject) => {
		if (element.target.files[0]) {
			reader.readAsDataURL(element.target.files[0] as File)
		} else {
			resolve(null)
		}
		reader.onloadend = () => {
			resolve(reader.result as string)
		}

		reader.onerror = () => {
			reject(null)
		}
	})
}
