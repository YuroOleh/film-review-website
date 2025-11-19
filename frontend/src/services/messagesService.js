const API_URL = "http://localhost:3000/messages";

export const messagesService = {
  async getAll(discussionId) {
    const res = await fetch(`${API_URL}?discussionId=${discussionId}&_sort=date&_order=asc`);
    if (!res.ok) throw new Error("Messages were not found...");
    return res.json();
  },

  async getById(id) {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) throw new Error("Message was not found...");
    return res.json();
  },

  async writeMessage(discussionId, userId, text) {
    const date = new Date().toISOString().split("T")[0]; 

    const body = {
      discussionId,
      userId,
      text,
      date
    };

    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    if (!res.ok) throw new Error("Failed to write message...");
    return res.json();
  },

  async getMessageCount(discussionId) {
    const messages = await this.getAll(discussionId);
    return messages.length;
  },

  async getUniqueUsersCount(discussionId) {
    const messages = await this.getAll(discussionId);
    const uniqueUsers = new Set(messages.map(msg => msg.userId));
    return uniqueUsers.size;
  }
};