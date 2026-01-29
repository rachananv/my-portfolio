import { contactMessages, type InsertContactMessage, type ContactMessage } from "@shared/schema";

export interface IStorage {
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private messages: ContactMessage[] = [];
  private currentId = 1;

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const newMessage: ContactMessage = {
      ...message,
      id: this.currentId++,
      createdAt: new Date(),
    };
    this.messages.push(newMessage);
    return newMessage;
  }
}

export const storage = new MemStorage();
