import  announcementModel  from "../models/announcement.model.js";

class AnnouncementService {
  async getAll() {
    return await announcementModel.find().sort({ createdAt: -1 });
  }

  async getById(id) {
    return await announcementModel.findById(id);
  }

  async create(data) {
    return await announcementModel.create(data);
  }

  async update(id, data) {
    return await announcementModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await announcementModel.findByIdAndDelete(id);
  }
}

export const announcementService = new AnnouncementService();
