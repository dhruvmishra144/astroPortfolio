'use client'
import ReactFlow, {
    Node,
    Edge,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    Position,
    MarkerType,
} from 'reactflow';
import 'reactflow/dist/style.css';

// Node styles for a more complex flowchart
const nodeStyles = {
    terminal: {
        background: '#06b6d4',
        color: '#fff',
        border: '3px solid #0e7490',
        borderRadius: '4px',
        padding: '24px',
        fontSize: '13px',
        fontWeight: 700,
        width: 180,
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    process: {
        background: 'rgba(255, 255, 255, 0.05)',
        color: '#e5e5e5',
        border: '2px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '4px',
        padding: '16px 20px',
        fontSize: '13px',
        lineHeight: '1.5',
        width: 220,
    },
    agent: {
        background: '#8b5cf6',
        color: '#fff',
        border: '2px dashed #8b5cf6',
        borderRadius: '4px',
        padding: '12px 16px',
        fontSize: '12px',
        fontStyle: 'italic',
        width: 200,
    },
    checkpoint: {
        background: '#fbbf24',
        color: '#fff',
        border: '3px solid #eab308',
        borderRadius: '4px',
        padding: '18px 22px',
        fontSize: '14px',
        fontWeight: 700,
        width: 240,
    },
    decision: {
        background: '#06b6d4',
        color: '#fff',
        border: '3px solid #06b6d4',
        borderRadius: '4px',
        padding: '20px',
        fontSize: '14px',
        fontWeight: 600,
        width: 140,
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'none',
    },
    warning: {
        background: '#ef4444',
        color: '#fff',
        border: '2px solid #ef4444',
        borderRadius: '4px',
        padding: '12px 16px',
        fontSize: '12px',
        width: 200,
    },
};

// Template structure - matching the uploaded flowchart
const initialNodes: Node[] = [
    // Start node
    {
        id: 'start',
        position: { x: 50, y: 300 },
        data: { label: 'User starts onboarding' },
        style: { ...nodeStyles.terminal },
        sourcePosition: Position.Right,
    },

    // Goal Selection
    {
        id: 'select-goal',
        position: { x: 300, y: 280 },
        data: { label: 'Select integration goal' },
        style: nodeStyles.process,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    },

    // Setup Agent Assistance
    {
        id: 'setup-agent',
        position: { x: 300, y: 430 },
        data: { label: 'Setup Agent Assist' },
        style: nodeStyles.agent,
        targetPosition: Position.Top,
    },

    // App Selection
    {
        id: 'select-apps',
        position: { x: 600, y: 280 },
        data: { label: 'Pick source & target apps' },
        style: nodeStyles.process,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    },

    // Secure Connection Setup
    {
        id: 'secure-connection',
        position: { x: 900, y: 330 },
        data: { label: 'Secure Connection' },
        style: nodeStyles.process,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    },

    // Connection Established
    {
        id: 'connection-established',
        position: { x: 1200, y: 330 },
        data: { label: 'Connection established' },
        style: nodeStyles.process,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    },

    // Field Mapping (AI Suggestions)
    {
        id: 'mapping-agent',
        position: { x: 1500, y: 280 },
        data: { label: 'Mapping Agent Suggests Fields' },
        style: nodeStyles.agent,
        targetPosition: Position.Top,
    },

    // Map Fields
    {
        id: 'map-fields',
        position: { x: 1500, y: 430 },
        data: { label: 'Map fields (CRM → Invoices)' },
        style: nodeStyles.process,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    },

    // Review Mapping
    {
        id: 'review-mapping',
        position: { x: 1800, y: 430 },
        data: { label: 'Review & Adjust Mapping' },
        style: nodeStyles.process,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    },

    // Decision Point: Looks Good?
    {
        id: 'decision-looksgood',
        position: { x: 2100, y: 330 },
        data: { label: 'Looks good?' },
        style: nodeStyles.decision,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    },

    // Make Adjustments (if no)
    {
        id: 'make-adjustments',
        position: { x: 2400, y: 430 },
        data: { label: 'Make adjustments' },
        style: nodeStyles.process,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    },

    // Continue Monitoring
    {
        id: 'monitoring-agent',
        position: { x: 2700, y: 330 },
        data: { label: 'Monitoring Agent' },
        style: nodeStyles.agent,
        targetPosition: Position.Top,
    },

    // Continuous Health Check
    {
        id: 'health-check',
        position: { x: 3000, y: 430 },
        data: { label: 'Continuous Health Check' },
        style: nodeStyles.process,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    },

    // Error Detected
    {
        id: 'issue-detected',
        position: { x: 3300, y: 330 },
        data: { label: 'Issue Detected' },
        style: nodeStyles.warning,
        targetPosition: Position.Top,
    },

    // Recovery Options
    {
        id: 'recovery-options',
        position: { x: 3600, y: 430 },
        data: { label: 'Recovery Options' },
        style: nodeStyles.process,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    },

    // End Node
    {
        id: 'end',
        position: { x: 3900, y: 300 },
        data: { label: 'Successful Execution' },
        style: { ...nodeStyles.terminal, background: '#10b981' },
        targetPosition: Position.Left,
    },
];

const initialEdges: Edge[] = [
    { id: 'e1', source: 'start', target: 'select-goal', animated: true, style: { strokeWidth: 2, stroke: '#06b6d4' } },
    { id: 'e2', source: 'select-goal', target: 'setup-agent', animated: true, style: { strokeWidth: 2 } },
    { id: 'e3', source: 'setup-agent', target: 'select-apps', animated: true, style: { strokeWidth: 2 } },
    { id: 'e4', source: 'select-apps', target: 'secure-connection', animated: true, style: { strokeWidth: 2 } },
    { id: 'e5', source: 'secure-connection', target: 'connection-established', animated: true, style: { strokeWidth: 2 } },
    { id: 'e6', source: 'connection-established', target: 'mapping-agent', animated: true, style: { strokeWidth: 2 } },
    { id: 'e7', source: 'mapping-agent', target: 'map-fields', animated: true, style: { strokeWidth: 2 } },
    { id: 'e8', source: 'map-fields', target: 'review-mapping', animated: true, style: { strokeWidth: 2 } },
    { id: 'e9', source: 'review-mapping', target: 'decision-looksgood', animated: true, style: { strokeWidth: 2 } },
    { id: 'e10', source: 'decision-looksgood', target: 'make-adjustments', label: 'No', animated: true, style: { strokeWidth: 2, stroke: '#ef4444' } },
    { id: 'e11', source: 'decision-looksgood', target: 'monitoring-agent', label: 'Yes', animated: true, style: { strokeWidth: 2, stroke: '#10b981' } },
    { id: 'e12', source: 'monitoring-agent', target: 'health-check', animated: true, style: { strokeWidth: 2 } },
    { id: 'e13', source: 'health-check', target: 'issue-detected', animated: true, style: { strokeWidth: 2 } },
    { id: 'e14', source: 'issue-detected', target: 'recovery-options', animated: true, style: { strokeWidth: 2 } },
    { id: 'e15', source: 'recovery-options', target: 'end', animated: true, style: { strokeWidth: 2 } },
];

export default function UserJourneyFlow() {
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, , onEdgesChange] = useEdgesState(initialEdges);

    return (
        <div style={{ width: '100%', height: '750px', background: 'rgba(0,0,0,0.3)', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                fitView
                minZoom={0.4}
                maxZoom={1.5}
                defaultViewport={{ x: 0, y: 0, zoom: 0.65 }}
                attributionPosition="bottom-left"
                proOptions={{ hideAttribution: true }}
            >
                <Controls 
                    style={{ 
                        background: 'rgba(255,255,255,0.1)', 
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '8px'
                    }} 
                />
                <Background 
                    gap={24} 
                    size={1.5} 
                    color="rgba(255,255,255,0.08)" 
                />
            </ReactFlow>
        </div>
    );
}
