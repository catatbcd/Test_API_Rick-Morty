<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('characters', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('origin_id')->nullable();
            $table->unsignedBigInteger('location_id')->nullable();
            $table->string('name');
            $table->string('status')->nullable();
            $table->string('species')->nullable();
            $table->string('type')->nullable();
            $table->string('gender')->nullable();
            $table->string('origin')->nullable();
            $table->string('location')->nullable();
            $table->string('image')->nullable();
            $table->json('episode')->nullable(); 
            $table->string('url')->nullable();
            $table->timestamp('created_at_api')->nullable();
            $table->timestamps();

          

            $table->foreign('origin_id')->references('id')->on('locations')->onDelete('set null');
            $table->foreign('location_id')->references('id')->on('locations')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('characters');
    }
};
