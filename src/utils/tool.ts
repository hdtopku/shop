import useClipboard from 'vue-clipboard3'
import { message } from 'ant-design-vue'

const { toClipboard } = useClipboard()

export default class Tool {
	public static copy = async (text: string, msg?: string | boolean) => {
		try {
			// 复制
			await toClipboard(text)
			if (typeof msg == 'string') {
				message.success(msg)
			} else if (msg == undefined || msg) {
				message.success('复制成功')
			}
			// 复制成功
		} catch (e) {
			// 复制失败
			console.error(e)
			message.error('复制失败')
		}
	}
}
