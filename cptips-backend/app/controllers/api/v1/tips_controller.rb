class Api::V1::TipsController < ApplicationController

    def index
        @tips = Tip.all

        render json: @tips, status: 200
    end

    def show
        @tip = Tip.find(params[:id])

        render json: @tip, status: 200
    end

    def create
        @tip = Tip.create(tip_params)

        render json: @tip, status: 200
    end

    def update
        @tip = Tip.find(params[:id])
        @tip.update(tip_params)

        render json: @tip, status: 200
    end

    def destroy
        @tip = Tip.find(params[:id])
        @tip.delete

        render json: {tipId: @tip.id}
    end

    private
        def tip_params
            params.require(:tip).permit(:title, :content, :author, :tip_url)
        end

end
