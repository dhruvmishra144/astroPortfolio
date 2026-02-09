'use client'
import { useCallback } from 'react';
import ReactFlow, {
    Node,
    Edge,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    Position,
} from 'reactflow';
import 'reactflow/dist/style.css';

// Custom styles matching backend architecture theme
const nodeStyles = {
    service: {
        background: 'rgba(255, 255, 255, 0.03)',
        color: '#e5e5e5',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        borderRadius: '8px',
        padding: '12px 16px',
        fontSize: '12px',
        width: 140,
        textAlign: 'center' as const,
    },
    storage: {
        background: 'rgba(59, 130, 246, 0.1)',
        color: '#e5e5e5',
        border: '1.5px solid #3b82f6',
        borderRadius: '8px',
        padding: '12px 16px',
        fontSize: '12px',
        width: 140,
        textAlign: 'center' as const,
    },
    critical: {
        background: 'rgba(239, 68, 68, 0.1)',
        color: '#fca5a5',
        border: '2px solid #ef4444',
        borderRadius: '8px',
        padding: '12px 16px',
        fontSize: '12px',
        fontWeight: 600,
        width: 160,
        textAlign: 'center' as const,
    },
    monitoring: {
        background: 'rgba(245, 158, 11, 0.1)',
        color: '#fbbf24',
        border: '2px solid #f59e0b',
        borderRadius: '8px',
        padding: '12px 16px',
        fontSize: '12px',
        fontWeight: 600,
        width: 150,
        textAlign: 'center' as const,
    },
    decision: {
        background: 'rgba(6, 182, 212, 0.1)',
        color: '#e5e5e5',
        border: '2px solid #06b6d4',
        borderRadius: '8px',
        padding: '16px',
        fontSize: '13px',
        width: 120,
        height: 120,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'rotate(45deg)',
        textAlign: 'center' as const,
    },
    decisionLabel: {
        transform: 'rotate(-45deg)',
    },
    queue: {
        background: 'rgba(168, 85, 247, 0.1)',
        color: '#c084fc',
        border: '1.5px solid #a855f7',
        borderRadius: '8px',
        padding: '12px 16px',
        fontSize: '12px',
        width: 140,
        textAlign: 'center' as const,
    },
};

const initialNodes: Node[] = [
    // Top Row - User Input & Initial Processing
    {
        id: '1',
        position: { x: 50, y: 50 },
        data: { label: 'User Input (Connector Config)' },
        style: nodeStyles.service,
        sourcePosition: Position.Right,
    },
    {
        id: '2',
        position: { x: 250, y: 50 },
        data: { label: 'API Gateway' },
        style: nodeStyles.service,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    },
    {
        id: '3',
        position: { x: 450, y: 50 },
        data: { label: 'Auth Service (OAuth/API Key)' },
        style: nodeStyles.service,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    },

    // Configuration Storage
    {
        id: '4',
        position: { x: 50, y: 180 },
        data: { label: 'Configuration Store (NoSQL)' },
        style: nodeStyles.storage,
        sourcePosition: Position.Right,
        targetPosition: Position.Top,
    },
    {
        id: '5',
        position: { x: 250, y: 180 },
        data: { label: 'Schema Registry' },
        style: nodeStyles.storage,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    },

    // Mapping & Transformation Layer
    {
        id: '6',
        position: { x: 700, y: 50 },
        data: { label: 'Mapping Engine (AI-Assisted)' },
        style: nodeStyles.service,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    },
    {
        id: '7',
        position: { x: 900, y: 50 },
        data: { label: 'Ghost Field Preview Generator' },
        style: nodeStyles.service,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    },
    {
        id: '8',
        position: { x: 700, y: 180 },
        data: { label: 'Cardinality Validator' },
        style: nodeStyles.monitoring,
        sourcePosition: Position.Right,
        targetPosition: Position.Top,
    },

    // Transformation & Risk Assessment
    {
        id: '9',
        position: { x: 1150, y: 50 },
        data: { label: 'Transformation Service' },
        style: nodeStyles.service,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    },
    {
        id: '10',
        position: { x: 1150, y: 180 },
        data: { label: 'Risk Analyzer (Blast Radius)' },
        style: nodeStyles.critical,
        sourcePosition: Position.Right,
        targetPosition: Position.Top,
    },

    // Dry Run & Preview
    {
        id: '11',
        position: { x: 1400, y: 50 },
        data: { label: 'Dry Run Executor (Sandbox)' },
        style: nodeStyles.monitoring,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    },
    {
        id: '12',
        position: { x: 1400, y: 180 },
        data: { label: 'Preview Diff Engine' },
        style: nodeStyles.service,
        sourcePosition: Position.Right,
        targetPosition: Position.Top,
    },

    // Decision Point
    {
        id: '13',
        position: { x: 1650, y: 90 },
        data: { 
            label: <div style={nodeStyles.decisionLabel}>User Approve?</div>
        },
        style: nodeStyles.decision,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    },

    // Versioned Change Sets
    {
        id: '14',
        position: { x: 1850, y: 50 },
        data: { label: 'Change Set Generator (Versioned)' },
        style: nodeStyles.critical,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    },
    {
        id: '15',
        position: { x: 1850, y: 180 },
        data: { label: 'Immutable Log Store' },
        style: nodeStyles.storage,
        sourcePosition: Position.Right,
        targetPosition: Position.Top,
    },

    // Execution Queue
    {
        id: '16',
        position: { x: 2100, y: 50 },
        data: { label: 'Execution Queue (Message Broker)' },
        style: nodeStyles.queue,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    },

    // Execution Workers
    {
        id: '17',
        position: { x: 2350, y: 0 },
        data: { label: 'Worker 1 (Sync Engine)' },
        style: nodeStyles.service,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    },
    {
        id: '18',
        position: { x: 2350, y: 80 },
        data: { label: 'Worker 2 (Sync Engine)' },
        style: nodeStyles.service,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    },
    {
        id: '19',
        position: { x: 2350, y: 160 },
        data: { label: 'Worker N (Sync Engine)' },
        style: nodeStyles.service,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    },

    // Target Systems
    {
        id: '20',
        position: { x: 2600, y: 50 },
        data: { label: 'Target System API' },
        style: nodeStyles.service,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    },

    // Monitoring & Anomaly Detection
    {
        id: '21',
        position: { x: 2600, y: 180 },
        data: { label: 'Real-time Anomaly Detector' },
        style: nodeStyles.monitoring,
        sourcePosition: Position.Right,
        targetPosition: Position.Top,
    },
    {
        id: '22',
        position: { x: 2850, y: 180 },
        data: { label: 'Health Monitor (Metrics & Logs)' },
        style: nodeStyles.monitoring,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    },

    // Result Processing
    {
        id: '23',
        position: { x: 2850, y: 50 },
        data: { label: 'Result Aggregator' },
        style: nodeStyles.service,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    },
    {
        id: '24',
        position: { x: 3100, y: 50 },
        data: { label: 'Audit Trail Writer' },
        style: nodeStyles.storage,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    },

    // Self-Healing & Recovery
    {
        id: '25',
        position: { x: 3100, y: 180 },
        data: { label: 'Self-Healing Agent (Suggest-Only)' },
        style: nodeStyles.critical,
        sourcePosition: Position.Right,
        targetPosition: Position.Top,
    },
    {
        id: '26',
        position: { x: 3350, y: 180 },
        data: { label: 'Rollback Service' },
        style: nodeStyles.critical,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    },

    // Report Generation
    {
        id: '27',
        position: { x: 3350, y: 50 },
        data: { label: 'Report Generator (CSV/JSON)' },
        style: nodeStyles.service,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    },

    // Final Output
    {
        id: '28',
        position: { x: 3600, y: 100 },
        data: { label: 'User Dashboard (Status & Reports)' },
        style: { ...nodeStyles.service, background: 'rgba(16, 185, 129, 0.1)', border: '2px solid #10b981', fontWeight: 600 },
        targetPosition: Position.Left,
    },

    // Rollback Storage
    {
        id: '29',
        position: { x: 2100, y: 180 },
        data: { label: 'Rollback Contract Store' },
        style: nodeStyles.storage,
        sourcePosition: Position.Right,
        targetPosition: Position.Top,
    },
];

const initialEdges: Edge[] = [
    // Main flow
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e2-3', source: '2', target: '3', animated: true },
    { id: 'e3-6', source: '3', target: '6', animated: true },
    { id: 'e6-7', source: '6', target: '7', animated: true },
    { id: 'e7-9', source: '7', target: '9', animated: true },
    { id: 'e9-11', source: '9', target: '11', animated: true },
    { id: 'e11-13', source: '11', target: '13', animated: true },
    { id: 'e13-14', source: '13', target: '14', label: 'Approved', style: { stroke: '#10b981' }, animated: true },
    { id: 'e14-16', source: '14', target: '16', animated: true },
    { id: 'e16-17', source: '16', target: '17', animated: true },
    { id: 'e16-18', source: '16', target: '18', animated: true },
    { id: 'e16-19', source: '16', target: '19', animated: true },
    { id: 'e17-20', source: '17', target: '20', animated: true },
    { id: 'e18-20', source: '18', target: '20', animated: true },
    { id: 'e19-20', source: '19', target: '20', animated: true },
    { id: 'e20-23', source: '20', target: '23', animated: true },
    { id: 'e23-24', source: '23', target: '24', animated: true },
    { id: 'e24-27', source: '24', target: '27', animated: true },
    { id: 'e27-28', source: '27', target: '28', animated: true, style: { stroke: '#10b981' } },

    // Storage connections
    { id: 'e2-4', source: '2', target: '4', style: { strokeDasharray: '5,5', stroke: '#3b82f6' } },
    { id: 'e4-5', source: '4', target: '5', style: { strokeDasharray: '5,5', stroke: '#3b82f6' } },
    { id: 'e6-8', source: '6', target: '8', style: { stroke: '#f59e0b' } },
    { id: 'e9-10', source: '9', target: '10', style: { stroke: '#ef4444' } },
    { id: 'e11-12', source: '11', target: '12', style: { strokeDasharray: '5,5' } },
    { id: 'e14-15', source: '14', target: '15', style: { strokeDasharray: '5,5', stroke: '#3b82f6' } },
    { id: 'e16-29', source: '16', target: '29', style: { strokeDasharray: '5,5', stroke: '#3b82f6' } },

    // Monitoring connections
    { id: 'e20-21', source: '20', target: '21', style: { stroke: '#f59e0b', strokeDasharray: '5,5' } },
    { id: 'e21-22', source: '21', target: '22', style: { stroke: '#f59e0b' } },
    { id: 'e23-25', source: '23', target: '25', style: { stroke: '#ef4444', strokeDasharray: '5,5' } },
    { id: 'e25-26', source: '25', target: '26', style: { stroke: '#ef4444' } },
    { id: 'e26-28', source: '26', target: '28', style: { stroke: '#ef4444', strokeDasharray: '5,5' } },

    // Rejection path
    { id: 'e13-11', source: '13', target: '11', label: 'Rejected', style: { stroke: '#ef4444' }, animated: true },
];

export default function BackendArchitectureFlow() {
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, , onEdgesChange] = useEdgesState(initialEdges);

    return (
        <div style={{ width: '100%', height: '500px', background: 'rgba(0,0,0,0.2)', borderRadius: '16px', overflow: 'hidden' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                fitView
                attributionPosition="bottom-left"
                proOptions={{ hideAttribution: true }}
            >
                <Controls style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }} />
                <Background gap={16} size={1} color="rgba(255,255,255,0.05)" />
            </ReactFlow>
        </div>
    );
}
