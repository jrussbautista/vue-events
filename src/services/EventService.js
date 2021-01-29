import apiClient from '../utils/apiClient'

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEventById(id) {
    return apiClient.get(`/events/${id}`)
  }
}
