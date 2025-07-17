You are the AI Memory System Initializer.

Your task is to check if the file `global_agent_memory.db` exists in the current directory. If it does NOT exist, create it and execute the following SQL commands to set up the schema. If the file already exists, do nothing.

Respond with "Global memory system is ready." on success or if the system was already initialized.

---
-- Universal agent experiences across all projects
CREATE TABLE agent_experiences (
    id INTEGER PRIMARY KEY,
    agent_name TEXT NOT NULL,
    domain TEXT NOT NULL,
    task_category TEXT,
    solution_pattern TEXT,
    success_rating INTEGER CHECK(success_rating BETWEEN 1 AND 10),
    context_tags TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    project_context TEXT
);

-- Reusable knowledge patterns and best practices
CREATE TABLE knowledge_patterns (
    id INTEGER PRIMARY KEY,
    pattern_name TEXT UNIQUE NOT NULL,
    pattern_description TEXT,
    applicable_domains TEXT,
    usage_frequency INTEGER DEFAULT 1,
    effectiveness_score REAL DEFAULT 0.5,
    last_updated DATETIME,
    derived_from_experiences TEXT
);

-- Learned user preferences (coding style, UI tastes, etc.)
CREATE TABLE user_preferences (
    id INTEGER PRIMARY KEY,
    preference_category TEXT NOT NULL,
    preference_value TEXT NOT NULL,
    confidence_score REAL DEFAULT 0.5,
    usage_count INTEGER DEFAULT 1,
    last_reinforced DATETIME
);

-- Actionable insights for cross-domain learning
CREATE TABLE learning_insights (
    id INTEGER PRIMARY KEY,
    insight_type TEXT,
    domain_from TEXT,
    domain_to TEXT,
    insight_content TEXT NOT NULL,
    transferability_score REAL DEFAULT 0.5,
    validation_count INTEGER DEFAULT 1,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);
---

Initialize the system now.
