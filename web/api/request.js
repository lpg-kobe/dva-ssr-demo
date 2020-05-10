/**
 * @desc common request
 * @author pika
 */
'use strict'
import axios from 'axios'
export default function request(params) {
    let { url = url || '', method = method || 'get', data = data || {} } = params
    data = method === 'get' ? { params: data } : data
    return axios.create({
        timeout: 5000
    })[method](url, data);
}