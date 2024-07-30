"""create flights table

Revision ID: abc123
Revises: 
Create Date: 2024-07-29 12:34:56

"""
from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision = 'abc123'
down_revision = None
branch_labels = None
depends_on = None

def upgrade():
    # Create the 'flights' table
    op.create_table(
        'flights',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('flight_number', sa.String(length=50), nullable=False),
        sa.Column('status', sa.String(length=50), nullable=False),
        sa.Column('gate', sa.String(length=10)),
    )

def downgrade():
    # Drop the 'flights' table
    op.drop_table('flights')
