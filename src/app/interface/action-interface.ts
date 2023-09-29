export interface ActionInterface {
    action: 'view' | 'edit' | 'delete';
    id: number | string;
}