import { get } from './base'

//url 需要和 backend-router.js 中 配置的相同
export function getRecommend() {
    return get('/api/getRecommend')
}