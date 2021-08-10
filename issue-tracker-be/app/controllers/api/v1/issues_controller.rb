class Api::V1::IssuesController < ApplicationController

        # skip_before_action :verify_authenticity_token

        def index
            issues = Issue.all

            render json: issues.as_json
        end

        def show
            if params[:id]
                issue = Issue.find_by(id: params[:id])
                
                if issue
                    render json: issue.as_json
                else
                    render json: {error: "no issue found"}, status: 404
                end 
            else
                render json: {error: "no issue found"}, status: 400
            end
        end

        def create
            issue = Issue.new(issue_params)

            if issue.save
                render json: issue.as_json
            else 
                render json: {error: issue.errors.messages}, status: 500
            end
        end

        def update
            if params[:id]
                issue = Issue.find_by(id: params[:id])

                if issue.update(issue_params)
                    render json: issue.as_json
                else 
                    render json: {error: issue.errors.messages}, status: 500
                end
            else
                render json: {error: "no issue found"}, status: 400
            end 
        end

        def destroy
            if params[:id]
                issue = Issue.find_by(id: params[:id])

                if issue.destroy
                    head :no_content
                else 
                    render json: {error: issue.errors.messages}, status: 500
                end
            else
                render json: {error: "no issue found"}, status: 400
            end
        end

        private
        def issue_params
            params.require(:issue).permit(:title, :description, :status)
        end
        
    
end
