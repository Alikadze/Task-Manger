export interface ProjectPayload {
  id?: string
  name?: string;
  abbreviation: string;
  description: string;
  color: string
}

export interface ProjectResponse {
createdAt: any;
  id: number
  name: string
  abbreviation: string
  description: string
  color: string
  boards: Board[]
}

export interface Boardpayload {
  name: string,
  description: string,
  position: number,
  columns: Column[]
}

export interface ColumnPayload {
  name?: string,
  description?: string,
  position?: number,
  boardId?: number,
  taskStatus?: string
  tasks?: Task[];
}

export interface Board {
  id: number
  name: string
  description: string
  position: number
  projectId: number
  project: ProjectResponse
  columns: Column[]
  tasks: Task[]
  createdAt: string
  updatedAt: string
  deletedAt: string
}

export interface Column {
  id?: number;
  name?: string;
  description?: string;
  position?: number;
  boardId?: string | number;
  board?: string;
  tasks?: Task[];
  taskStatus?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}


export interface Task {
title: any;
  id?: number
  name?: string
  description?: string
  issueTypeId?: number
  issueType?: IssueType
  epicId?: number
  epic?: Epic
  projectId?: number
  project?: string
  boardId?: number
  board?: string
  boardColumnId?: number
  boardColumn?: string
  isBacklog?: boolean
  priority?: string
  taskStatus?: string
  assigneeId?: number
  assignee?: Assignee
  reporterId?: number
  reporter?: Reporter
  createdById?: number
  createdBy?: CreatedBy
  deletedById?: number
  deletedBy?: DeletedBy
  createdAt?: string
  updatedAt?: string
  deletedAt?: string
  position?: number
}

export interface TaskPayload {
  boardId: number,
  boardColumnId: number | undefined,
  name: string,
  description: string,
  epicId: number,
  priority: string,
  assigneeId: number,
  issueTypeId: number,
  isBacklog: boolean,
  taskStatus: string | undefined,
}

export interface TaskProperty {
  name: string,
  fieldName: string, 
  value: string,
  isRequired: boolean
}

export interface IssueType {
  id: number
  name: string
  description: string
  icon: string
  color: string
  isActive: boolean
  type: string
  issueTypeColumns: IssueTypeColumn[]
  createdAt: string
  updatedAt: string
  deletedAt: string
}

export interface IssueTypeColumn {
  id: number
  name: string
  filedName: string
  type: string
  isRequired: boolean
  issueTypeId: number
  issueType: string
  createdAt: string
  updatedAt: string
  deletedAt: string
}

export interface Epic {
  id: number
  name: string
  description: string
  projectId: number
  position: number
  createdAt: string
  updatedAt: string
  deletedAt: string
}

export interface Assignee {
  id: number
  createdAt: string
  firstName: string
  lastName: string
  email: string
  mobileNumber: string
  isActive: boolean
  userPermissions: string[]
  roles: string[]
  projects: string[]
}

export interface Reporter {
  id: number
  createdAt: string
  firstName: string
  lastName: string
  email: string
  mobileNumber: string
  isActive: boolean
  userPermissions: string[]
  roles: string[]
  projects: string[]
}

export interface CreatedBy {
  id: number
  createdAt: string
  firstName: string
  lastName: string
  email: string
  mobileNumber: string
  isActive: boolean
  userPermissions: string[]
  roles: string[]
  projects: string[]
}

export interface DeletedBy {
  id: number
  createdAt: string
  firstName: string
  lastName: string
  email: string
  mobileNumber: string
  isActive: boolean
  userPermissions: string[]
  roles: string[]
  projects: string[]
}

